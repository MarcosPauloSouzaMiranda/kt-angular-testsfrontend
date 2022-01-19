export default class CPF {
    private _value: string;
    private readonly CPF_LENGTH_VALID: number = 11;
    private readonly FACTOR_DIGIT_1: number = 10;
    private readonly FACTOR_DIGIT_2: number = 11;
    private readonly MAX_DIGIT_1: number = 9;
    private readonly MAX_DIGIT_2: number = 10;

    public constructor(cpf: string = '') {
      this._value = cpf;
    }

    public validate(cpf: string): boolean {
      if (!cpf) return false;
      const onlyNumbers: string | null | undefined = this.extractNumbers(cpf);
      if (!onlyNumbers) return false;
      if (!this.isLengthValid(onlyNumbers)) return false;
      if (this.isAllNumbersEquals(onlyNumbers)) return false;
      if (this.isSequencialNumber(onlyNumbers)) return false;
      const firstDigit: string = this.calculateDigit(cpf, this.FACTOR_DIGIT_1, this.MAX_DIGIT_1);
      const secondDigit: string = this.calculateDigit(cpf, this.FACTOR_DIGIT_2, this.MAX_DIGIT_2);
      return this.isDigitVerificatorValid(onlyNumbers, `${firstDigit}${secondDigit}`);
    }

    public getValue(): string {
      return this._value;
    }

    private extractNumbers(cpf: string): string | null | undefined {
      return cpf.match(/\d/g)?.join('');
    }

    private isAllNumbersEquals(cpf: string): boolean {
      const firstCaracter: string = cpf.substring(0, 1);
      let allEquals: boolean = true;
      cpf.split('').forEach((character: string) => {
        if (character !== firstCaracter) { allEquals = false };
      })

      return allEquals;
    }

    private isLengthValid(cpf: string): boolean {
      return (cpf.length === this.CPF_LENGTH_VALID);
    }

    private isSequencialNumber(cpf: string): boolean {
      const cpfArray: number[] = cpf.split('').map((character: string) => parseInt(character));
      let lastNumber = cpfArray[0];
      let isSequencialNumber = true;
      for(let i = 1; i < cpfArray.length; i++) {
        const nextNumberPrevius: number = lastNumber + 1;
        if (nextNumberPrevius !== cpfArray[i]) isSequencialNumber = false;
        lastNumber++;
      }
      return isSequencialNumber;
    }

    private calculateDigit(cpf: string, factor: number, max: number): string {
      let total: number = 0;
      let cpfValue: string = cpf.substring(0, max);
      let cpfNumberArray: number[] = cpfValue.split('').map((character: string) => parseInt(character));
      cpfNumberArray.forEach((num: number) => {
        total += num * factor;
        factor--;
      });
      const rest: number = total % 11;
      if (rest < 2) return '0';
      return String(11 - rest);
    }

    private isDigitVerificatorValid(cpf: string, digitVerificator: string): boolean {
      const digitVerificatorCPFOrigin: string = cpf.substring(9);
      return digitVerificatorCPFOrigin === digitVerificator;
    }
}

import CPF from "./CPF";

describe('CPF validation', () => {

  it('should must check if the CPF is valid', () => {
    const CPFValue: string = '51645468097';
    const cpf: CPF = new CPF();
    const isValid: boolean = cpf.validate(CPFValue);
    expect(true).toBe(isValid);
  });

  it('should must check if the CPF is not valid', () => {
    const CPFValue: string = '51645468096';
    const cpf: CPF = new CPF();
    const isValid: boolean = cpf.validate(CPFValue);
    expect(false).toBe(isValid);
  });

  it('should must check if the CPF has repeated numbers is not valid', () => {
    const CPFValue: string = '11111111111';
    const cpf: CPF = new CPF();
    const isValid: boolean = cpf.validate(CPFValue);
    expect(false).toBe(isValid);
  });

  it('should must check if the CPF not contain only numbers is not valid', () => {
    const CPFValue: string = '11111T11111';
    const cpf: CPF = new CPF();
    const isValid: boolean = cpf.validate(CPFValue);
    expect(false).toBe(isValid);
  });

  it('should must check if the CPF sequencial numbers is not valid', () => {
    const CPFValue: string = '12345678912';
    const cpf: CPF = new CPF();
    const isValid: boolean = cpf.validate(CPFValue);
    expect(false).toBe(isValid);
  });
});

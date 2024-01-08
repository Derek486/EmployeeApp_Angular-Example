export interface Employee {
  id: number | string,
  firstName?: string,
  lastName?: string,
  age?: number,
  salary?: number
}

export type EmployeeErrores = {
  firstName?: string,
  lastName?: string,
  age?: string,
  salary?: string
}
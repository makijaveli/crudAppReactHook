// This reducer will define CRUD actions like ADD_EMPLOYEE, EDIT_EMPLOYEE, and REMOVE_EMPLOYEE

export default function appReducer(state, action) {
    switch (action.type) {
        case "ADD_EMPLOYEE":
            return {
                ...state,
                employees: [...state.employees, action.payload],
            }
        case "EDIT_EMPLOYEE":
            const updatedEmployee = action.payload; // selected employee
            const updatedEmployees = state.employees.map(employee => {
                if (employee.id === updatedEmployee.id) {
                    return updatedEmployee;
                }
                return employee;
            })
            return {
                ...state,
                employees: updatedEmployees,
            }
        case "REMOVE_EMPLOYEE":
            return {
                ...state,
                employees: state.employees.filter(employee => {
                    return employee.id !== action.payload
                })
            }
        default:
            return state;
    }
}
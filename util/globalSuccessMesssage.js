module.exports = {
  employee: {
    created:{
      status: 201,
      message: 'Employee created Successfully'
    },
    updated:{
      status: 301,
      message: 'Employee updated successfully!'
    },
    deleted:{
      status: 302,
      message: 'Employee deleted successfully!'
    }
  },
  error:{
    alreadyExists:{
      status: 400,
      message: 'Email already exists!'
    },
    internal:{
      status: 500,
      message: 'Internal server error!'
    },
    notFound:{
      status: 300,
      message : 'Employee not found!'
    },
    notAdded:{
      status: 401,
      message: 'can`t add employee'
    },
    notUpdated:{
      status: 402,
      message: 'can`t update employee'
    },
    notDeleted:{
      status: 403,
      message: 'can`t delete employee'
    }
  }
}
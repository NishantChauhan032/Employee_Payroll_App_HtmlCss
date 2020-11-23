window.addEventListener('DOMContentLoaded',(event) => {
    createInnerHtml();
});

createInnerHtml = () => {
    
    const headerHtml = "<th></th><th>Name</th><th>Gender</th> <th>Department</th>"+
                       "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    let employeePayrollList = createEmployeePayrollJSON();
    for(const employeePayrollData of employeePayrollList){
        innerHtml = `${innerHtml}
    <tr>
        <td><img class="profile" alt="" src="${employeePayrollData._profilePic}"></td>
        <td>${employeePayrollData._name}</td>
        <td>${employeePayrollData._gender}</td>
        <td>${getDeptHtml(employeePayrollData._department)}</td>
        <td>${employeePayrollData._salary}</td>
        <td>${employeePayrollData._startDate}</td>
        <td>
            <img id="${employeePayrollData._id}" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
            <img id="${employeePayrollData._id}" alt="edit" onclick="update(this)" src="../assets/icons/create-black-18dp.svg">
        </td>
    </tr>
    `;
    }
    document.querySelector("#table-display").innerHTML = innerHtml;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for(const dept of deptList){
        deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`
    }
    return deptHtml;
}

const createEmployeePayrollJSON = () => {
    let employeePayrollListLocal = [
        {
            _name : 'Nishant Chauhan',
            _gender : 'Male',
            _department : [
                'Engineering',
                'Finance'
            ],
            _salary : '500000',
            _startDate : '16 Sep 2020',
            _note : 'Fresher',
            _id : new Date().getTime(),
            _profilePic : '../assets/profile-images/Pro8.png'
        },
        {
            _name : 'Adrija Chauhan',
            _gender : 'Female',
            _department : [
                'HR',
                'Sales'
            ],
            _salary : '400000',
            _startDate : '23 Aug 2020',
            _note : 'New Joining',
            _id : new Date().getTime() + 1,
            _profilePic : '../assets/profile-images/Ellipse -4.png'
        }
    ];
    return employeePayrollListLocal;
}
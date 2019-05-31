/**
 * @desc    API接口类封装
 */
/* url */
const domMainName = 'http://111.231.66.71:8001';
/* interfaceName */
const login = '/admin/login';

const getStudentList = '/admin/studentList';

//student
const studentLogin = '/student/login';

const studentCourseOrder = '/student/courseOrder';

module.exports = {
  loginInfoUrl: domMainName.concat(login),
  studentLoginInfoUrl: domMainName.concat(studentLogin),
  studentCourseOrderUrl: domMainName.concat(studentCourseOrder),
  getStudentListUrl: domMainName.concat(getStudentList)
}

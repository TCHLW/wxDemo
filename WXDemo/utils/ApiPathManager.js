/**
 * @desc    API接口类封装
 */
/* url */
const domMainName = 'http://111.231.66.71:8001';
/* interfaceName */
const login = '/admin/login';

const getStudentList = '/admin/studentList';

module.exports = {
  loginInfoUrl: domMainName.concat(login),
  getStudentListUrl: domMainName.concat(getStudentList)
}

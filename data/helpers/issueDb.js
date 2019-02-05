const db = require('../config/dbConfig');

module.exports = {
  getBySchool: (school_id) => {
    let query = db('issue')
      .select(
        'issue.id',
        'issue.created_at',
        'issue.photo_url',
        'issue.description',
        'issue.cost',
        'admin.firstname',
        'admin.lastname',
        'issue_type.name',
        'issue_type.name'
      )
      .join('admin', 'issue.admin_id', 'admin.id')
      .join('issue_type', 'issue.type_id', 'issue_type.id')
      .where('admin.school_id', school_id);

    return query;
  },
  insert: (issue) => {
    return db('issue').insert(issue);
  },
  getIssueType: () => {
    return db('issue_type');
  },
  delete: (id) => {
    return db('issue').where('id', id).del();
  },
  update: (id, issue) => {
    return db('issue').where('id', id).update(issue);
  },
  getByBoard: (id) => {
    let query = db('board')
      .select(
        'issue.id',
        'issue.created_at',
        'issue.photo_url',
        'issue.description',
        'issue.cost',
        'admin.id as admin_id',
        'admin.firstname',
        'admin.lastname',
        'issue_type.name as type',
        'issue_status.name as status'
      )
      .join('school_board', 'board.id', 'school_board.board_id')
      .join('school', 'school_board.school_id', 'school.id')
      .join('admin', 'admin.school_id', 'school.id')
      .join('issue', 'admin.id', 'issue.admin_id')
      .join('issue_type', 'issue.type_id', 'issue_type.id')
      .join('issue_status', 'issue.status_id', 'issue_status.id')
      .where('board.id', id);
    return query;
  },
  createAction: function (action) {
    return db('action_log')
      .insert(action)
  },
  get: function (id) {
    return db('issue').where('id', id).first();
  },
  getStatuses: function () {
    return db('issue_status');
  }
}
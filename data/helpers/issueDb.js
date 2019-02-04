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
  }
}
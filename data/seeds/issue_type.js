exports.seed = function(knex, Promise) {
  return knex('issue_type')
    .truncate()
    .then(function () {
      return knex('issue_type').insert([
        {name: 'Security'},
        {name: 'Electrical'},
        {name: 'Furniture'},
        {name: 'Text Books'},
        {name: 'General School Supplies'},
        {name: 'Tech Equipment'},
        {name: 'Others'}
      ]);
    });
};

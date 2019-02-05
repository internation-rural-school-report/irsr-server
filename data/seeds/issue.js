exports.seed = function(knex, Promise) {
  return knex('issue')
    .truncate()
    .then(function () {
      return knex('issue').insert([
        {
          description: 'Light bulb replacement',
          cost: 1000,
          admin_id: 1,
          type_id: 2,
          status_id: 2
        },
        {
          description: 'Crayons',
          cost: 1500,
          admin_id: 2,
          type_id: 5,
          status_id: 1
        },
        {
          description: 'Chairs replacement',
          cost: 12500,
          admin_id: 3,
          type_id: 3,
          status_id: 2
        },
        {
          description: 'Cleaning supplies',
          cost: 750,
          admin_id: 3,
          type_id: 7,
          status_id: 2
        },
        {
          description: 'Ipads',
          cost: 700000,
          admin_id: 4,
          type_id: 6,
          status_id: 1
        },
        {
          description: '10th grade text book',
          cost: 75000,
          admin_id: 4,
          type_id: 4,
          status_id: 1
        },
        {
          description: 'Children books',
          cost: 10000,
          admin_id: 6,
          type_id: 7,
          status_id: 1
        },
        {
          description: 'Light bulb replacement',
          cost: 650,
          admin_id: 5,
          type_id: 2,
          status_id: 1
        }
      ]);
    });
};
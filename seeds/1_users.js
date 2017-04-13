
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          id: 1,
          first_name: 'Sam',
          last_name: 'Miller',
          email: 'sammzamm01@gmail.com ',
          hashed_password: '$2a$12$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
          gender: 1,
          age: 28,
          looking_for: true,
          interested_in: 2,
          bio: 'I am Sam. I like climbing.',
          usr_name: 'SammZamm',
          lat: 40.068337,
          long: -105.1820337,
          photo: '/Users/haleykalb/workspace/q2/Q2Project/public/img/Andrew1.jpg'
        },
        {
          id: 2,
          first_name: 'Haley',
          last_name: 'Kalb',
          email: 'haley.kalb@gmail.com ',
          hashed_password: '$4a$90$C9AYYmcLVGYlGoO4vSZTPud9ArJwbGRsJ6TUsNULzR48z8fOnTXbS',
          gender: 2,
          age: 34,
          looking_for: false,
          interested_in: 1,
          bio: 'I am the most amazing.',
          usr_name: 'RucaLove',
          lat: 40.0228514,
          long: -105.2544565,
          photo: 'https://images.search.yahoo.com/search/images;_ylt=AwrBT9LCBO9YmWoAKypXNyoA;_ylu=X3oDMTE0OTI1ODc3BGNvbG8DYmYxBHBvcwMxBHZ0aWQDQjM2MDRfMQRzZWMDcGl2cw--?p=bob+ross&fr2=piv-web&fr=spigot-chr-gcmac#id=0&iurl=http%3A%2F%2Fstatic2.businessinsider.com%2Fimage%2F563246309dd7cc25008c5b20%2Famazons-live-video-network-twitch-is-showing-every-episode-of-bob-ross-the-joy-of-painting-in-an-epic-marathon.jpg&action=click'
        },
        {
          id: 3,
          first_name: 'Nico',
          last_name: 'Roldos',
          email: 'nico.roldos@me.com',
          hashed_password: 'EAACCAVAZCUOoBAAA097G5WMfuA2O3c2xFyk7QCfpYe9FZCpDyZCAhYRVg2YT15Q',
          gender: 1,
          age: 28,
          looking_for: true,
          interested_in: 2,
          bio: 'I drive a Subaru',
          usr_name: 'Nicowave',
          lat: 40.0207741,
          long: -105.277141,
          photo: '/public/img/NicoWave1.jpg'
        },
        {
          id: 4,
          first_name: 'Megan',
          last_name: 'Gross',
          email: '144.mdgross@gmail.com',
          hashed_password: 'EBBCCAVAZCUOoBAAA097G5WMfuA2O3c2xFyk7QCfpYe9FZCpDyZCAhYRVg2YT15Q',
          gender: 2,
          age: 26,
          looking_for: true,
          interested_in: 1,
          bio: 'My teammates love me endlessly.',
          usr_name: 'Gross',
          lat: 40.0207741,
          long: -105.277141,
          photo: '/img/Gross1.jpg'
        },
        {
          id: 5,
          first_name: 'Lisa',
          last_name: 'Ma',
          email: 'limawebdev@gmail.com',
          hashed_password: 'ECCCCAVAZCUOoBAAA097G5WMfuA2O3c2xFyk7QCfpYe9FZCpDyZCAhYRVg2YT15Q',
          gender: 2,
          age: 23,
          looking_for: false,
          interested_in: 1,
          bio: 'I only date unicorns.',
          usr_name: 'ChubbyBunny',
          lat: 40.0207741,
          long: -105.277141,
          photo: 'https://www.facebook.com/photo.php?fbid=4694675884557&set=a.1427733133030.2050091.1223850753&type=3&theater'
        },
        {
          id: 6,
          first_name: 'Craig',
          last_name: 'Quincy',
          email: 'craig.quincy@galvanize.com',
          hashed_password: 'EDDCCAVAZCUOoBAAA097G5WMfuA2O3c2xFyk7QCfpYe9FZCpDyZCAhYRVg2YT15Q',
          gender: 1,
          age: 48,
          looking_for: true,
          interested_in: 2,
          bio: 'I am the all mighty ruler of g44.',
          usr_name: 'Craag',
          lat: 40.0207741,
          long: -105.277141,
          photo: 'https://www.facebook.com/photo.php?fbid=4694675884557&set=a.1427733133030.2050091.1223850753&type=3&theater'
        },
        {
          id: 7,
          first_name: 'Tiffany',
          last_name: 'Perfection',
          email: 'tiffany@gmail.com',
          hashed_password: 'EEEDDAVAZCUOoBAAA097G5WMfuA2O3c2xFyk7QCfpYe9FZCpDyZCAhYRVg2YT15Q',
          gender: 2,
          age: 26,
          looking_for: true,
          interested_in: 1,
          bio: 'I am your perfect match.',
          usr_name: 'Tiffany',
          lat: 40.0207741,
          long: -105.277141,
          photo: 'https://www.facebook.com/photo.php?fbid=4694675884557&set=a.1427733133030.2050091.1223850753&type=3&theater'
        },
        {
          id: 8,
          first_name: 'Kelly',
          last_name: 'Cordes',
          email: 'kellycordes@gmail.com',
          hashed_password: 'EEEEEAVAZCUOoBAAA097G5WMfuA2O3c2xFyk7QCfpYe9FZCpDyZCAhYRVg2YT15Q',
          gender: 1,
          age: 41,
          looking_for: false,
          interested_in: 2,
          bio: 'I climb and I have the best mullet in all the land.',
          usr_name: 'MulletMan',
          lat: 40.0207741,
          long: -105.277141,
          photo: 'https://www.facebook.com/photo.php?fbid=4694675884557&set=a.1427733133030.2050091.1223850753&type=3&theater'
        },
        {
          id: 9,
          first_name: 'Summer',
          last_name: 'Smith',
          email: 'summersmith@gmail.com',
          hashed_password: 'EFFEEAVAZCUOoBAAA097G5WMfuA2O3c2xFyk7QCfpYe9FZCpDyZCAhYRVg2YT15Q',
          gender: 2,
          age: 30,
          looking_for: false,
          interested_in: 1,
          bio: 'Is my perfect match out there?',
          usr_name: 'Summer',
          lat: 40.0207741,
          long: -105.277141,
          photo: 'https://www.facebook.com/photo.php?fbid=4694675884557&set=a.1427733133030.2050091.1223850753&type=3&theater'
        },
        {
          id: 10,
          first_name: 'Kayti',
          last_name: 'Trifecta',
          email: 'kaytitrifecta@gmail.com',
          hashed_password: 'EGGEEAVAZCUOoBAAA097G5WMfuA2O3c2xFyk7QCfpYe9FZCpDyZCAhYRVg2YT15Q',
          gender: 2,
          age: 25,
          looking_for: true,
          interested_in: 1,
          bio: 'I love cooking.',
          usr_name: 'KaytiTrifecta',
          lat: 40.0207741,
          long: -105.277141,
          photo: 'https://www.facebook.com/photo.php?fbid=4694675884557&set=a.1427733133030.2050091.1223850753&type=3&theater'
        }
      ]);
    })
  .then(() => {
    return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
  })
};

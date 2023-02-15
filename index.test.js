const {sequelize} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });

    test('can create a Restaurant', async () => {
        // TODO - write test

        const restaurant = await Restaurant.create({
            name: 'Sunshine Curry',
            location: 'Northampton',
            cuisine: 'Jamacian',
        });
        expect(restaurant.name).toEqual('Sunshine Curry');
        expect(restaurant.location).toEqual('Northampton');
        expect(restaurant.cuisine).toEqual('Jamacian');
    });

    test('can create a Menu', async () => {

        // TODO - write test
        const menu = await Menu.create({
            title: 'Lunch',
        });
        expect(menu.title).toEqual('Lunch');
    });

    test('can find Restaurants', async () => {

        // TODO - write test
        const restaurant = await Restaurant.findAll();

        expect(restaurant.length).toEqual(1);
        expect(restaurant[0].name).toEqual('Sunshine Curry');
        expect(restaurant[0].location).toEqual('Northampton');
        expect(restaurant[0].cuisine).toEqual('Jamacian');

    });

    test('can find Menus', async () => {
        // TODO - write test
        const menu = await Menu.findAll({
            where: {
                title: 'Lunch',
            },
        })
      
    });
    test('can delete Restaurants', async () => {

        const restaurant = await Restaurant.destroy({
            where: {
                name: 'Sunshine Curry',
            },
        });

      
    });
})
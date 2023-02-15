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
            rating: 5,
        });
        expect(restaurant.name).toEqual('Sunshine Curry');
        expect(restaurant.location).toEqual('Northampton');
        expect(restaurant.cuisine).toEqual('Jamacian');
        expect(restaurant.rating).toEqual(5);
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
        const restaurant = await Restaurant.findAll({
            where: {
                name: 'Sunshine Curry',
            },

        });
        

       

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

        const menu = await Menu.destroy({
            where: {
                title: 'Lunch',
            },

        })
 
      
    });
})
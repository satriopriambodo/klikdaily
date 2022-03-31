"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Stocks",
      [
        {
          location: "A-1-1",
          product: "Indomie Goreng",
          quantity: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          location: "A-1-2",
          product: "Teh Kotak",
          quantity: 150,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Stocks", null, {});
  },
};

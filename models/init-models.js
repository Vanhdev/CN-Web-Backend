var DataTypes = require("sequelize").DataTypes;
var _arrivals = require("./arrivals");
var _comments = require("./comments");
var _places = require("./places");
var _posts = require("./posts");
var _rates = require("./rates");
var _sequelizemeta = require("./sequelizemeta");
var _services = require("./services");
var _tour_arrival = require("./tour_arrival");
var _tour_place = require("./tour_place");
var _tour_service = require("./tour_service");
var _tours = require("./tours");
var _types = require("./types");
var _user_bookinng_tour = require("./user_bookinng_tour");
var _user_favorite_tour = require("./user_favorite_tour");
var _users = require("./users");

function initModels(sequelize) {
  var arrivals = _arrivals(sequelize, DataTypes);
  var comments = _comments(sequelize, DataTypes);
  var places = _places(sequelize, DataTypes);
  var posts = _posts(sequelize, DataTypes);
  var rates = _rates(sequelize, DataTypes);
  var sequelizemeta = _sequelizemeta(sequelize, DataTypes);
  var services = _services(sequelize, DataTypes);
  var tour_arrival = _tour_arrival(sequelize, DataTypes);
  var tour_place = _tour_place(sequelize, DataTypes);
  var tour_service = _tour_service(sequelize, DataTypes);
  var tours = _tours(sequelize, DataTypes);
  var types = _types(sequelize, DataTypes);
  var user_bookinng_tour = _user_bookinng_tour(sequelize, DataTypes);
  var user_favorite_tour = _user_favorite_tour(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  tour_arrival.belongsTo(arrivals, { as: "arrival", foreignKey: "arrival_id" });
  arrivals.hasMany(tour_arrival, {
    as: "tour_arrivals",
    foreignKey: "arrival_id",
  });
  tour_place.belongsTo(places, { as: "place", foreignKey: "place_id" });
  places.hasMany(tour_place, { as: "tour_places", foreignKey: "place_id" });
  comments.belongsTo(posts, { as: "post", foreignKey: "post_id" });
  posts.hasMany(comments, { as: "comments", foreignKey: "post_id" });
  tour_service.belongsTo(services, { as: "service", foreignKey: "service_id" });
  services.hasMany(tour_service, {
    as: "tour_services",
    foreignKey: "service_id",
  });
  rates.belongsTo(tours, { as: "tour", foreignKey: "tour_id" });
  tours.hasMany(rates, { as: "rates", foreignKey: "tour_id" });
  tour_arrival.belongsTo(tours, { as: "tour", foreignKey: "tour_id" });
  tours.hasMany(tour_arrival, { as: "tour_arrivals", foreignKey: "tour_id" });
  tour_place.belongsTo(tours, { as: "tour", foreignKey: "tour_id" });
  tours.hasMany(tour_place, { as: "tour_places", foreignKey: "tour_id" });
  tour_service.belongsTo(tours, { as: "tour", foreignKey: "tour_id" });
  tours.hasMany(tour_service, { as: "tour_services", foreignKey: "tour_id" });
  user_bookinng_tour.belongsTo(tours, { as: "tour", foreignKey: "tour_id" });
  tours.hasMany(user_bookinng_tour, {
    as: "user_bookinng_tours",
    foreignKey: "tour_id",
  });
  user_favorite_tour.belongsTo(tours, { as: "tour", foreignKey: "tour_id" });
  tours.hasMany(user_favorite_tour, {
    as: "user_favorite_tours",
    foreignKey: "tour_id",
  });
  tours.belongsTo(types, { as: "type", foreignKey: "type_id" });
  types.hasMany(tours, { as: "tours", foreignKey: "type_id" });
  comments.belongsTo(users, { as: "user", foreignKey: "user_id" });
  users.hasMany(comments, { as: "comments", foreignKey: "user_id" });
  posts.belongsTo(users, { as: "user", foreignKey: "user_id" });
  users.hasMany(posts, { as: "posts", foreignKey: "user_id" });
  rates.belongsTo(users, { as: "user", foreignKey: "user_id" });
  users.hasMany(rates, { as: "rates", foreignKey: "user_id" });
  user_bookinng_tour.belongsTo(users, { as: "user", foreignKey: "user_id" });
  users.hasMany(user_bookinng_tour, {
    as: "user_bookinng_tours",
    foreignKey: "user_id",
  });
  user_favorite_tour.belongsTo(users, { as: "user", foreignKey: "user_id" });
  users.hasMany(user_favorite_tour, {
    as: "user_favorite_tours",
    foreignKey: "user_id",
  });

  return {
    arrivals,
    comments,
    places,
    posts,
    rates,
    sequelizemeta,
    services,
    tour_arrival,
    tour_place,
    tour_service,
    tours,
    types,
    user_bookinng_tour,
    user_favorite_tour,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

const Car = require("../models/Car");
const { catchAsync, sendResponse, AppError } = require("../helpers/utils");

const carController = {};

carController.creatNewCar = catchAsync(async (req, res, next) => {
  const curentUserId = req.userMyId;
  const { name, model, color, image, seat, fuel, insurance, price } = req.body;
  let car = await Car.create({
    brand,
    model,
    color,
    image,
    seat,
    fuel,
    insurance,
    price,
    owner: curentUserId,
  });
  car = await car.populate("owner");
  return sendResponse(res, 200, true, car, null, "Create new car successful");
});

carController.getListOfCar = catchAsync(async (req, res, next) => {
  const curentUserId = req.userMyId;
  const carList = await Car.find({ isDeleted: false }).populate(
    "owner",
    "name"
  );

  return sendResponse(res, 200, true, carList, null, "Get list car successful");
});

carController.getSingleCar = catchAsync(async (req, res, next) => {
  const carId = req.params.carId;
  let car = await Car.findById({ _id: carId, isDeleted: false }).populate(
    "owner",
    "name"
  );
  if (!car) throw new AppError(400, "Car not found", "Get single car error");

  return sendResponse(res, 200, true, car, null, "Get list car successful");
});

carController.updateSingleCar = catchAsync(async (req, res, next) => {
  const curentUserId = req.userMyId;
  const carId = req.params.carId;
  const { name, model, color, image, seat, fuel, insurance, price } = req.body;
  let car = await Car.findById(carId);
  if (!car) throw new AppError(400, "Car not found", "Update car error");
  if (car.owner.valueOf() !== curentUserId)
    throw new AppError(400, "This is not your car", "Update car error");
  const info = [
    "brand",
    "model",
    "color",
    "image",
    "seat",
    "fuel",
    "insurance",
    "price",
  ];
  info.forEach((field) => {
    if (req.body[field] !== undefined) {
      car[field] = req.body[field];
    }
  });
  await car.save();
  return sendResponse(
    res,
    200,
    true,
    car,
    null,
    "Update single car successful"
  );
});

carController.deleteSingleCar = catchAsync(async (req, res, next) => {
  const curentUserId = req.userMyId;
  const carId = req.params.carId;
  const car = await Car.findByIdAndUpdate(
    { _id: carId },
    { isDeleted: true },
    { new: true }
  );
  if (!car) throw new AppError(400, "Car not found", "Delete car error");

  return sendResponse(
    res,
    200,
    true,
    car,
    null,
    "Delete single car successful"
  );
});

module.exports = carController;

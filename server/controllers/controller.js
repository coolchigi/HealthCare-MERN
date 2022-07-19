import Services from "./model.js";

export const getServices = async (req, res) => {
  try {
    //Retrieve the services currently in the DB
    //It would take some time to retrieve data so we would await
    const serviceList = await Services.find();
    console.log(serviceList);
    res.status(200).json(serviceList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createService = async (req, res) => {
  const aservice = req.body;
  const newService = new Services(aservice);
  try {
    await newService.save();
    res.status(200).json(newService);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  res.send("Service created");
};

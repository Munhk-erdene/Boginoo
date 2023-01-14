import Data from "../model/Data.js";
export const getAllDatas = async (req, res) => {
  try {
    const data = await Data.find({});
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      success: true,
      data: error.message,
    });
  }
};

export const createData = async (req, res) => {
  try {
    const data = await Data.create(req.body);
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const data = async (req, res) => {
  try {
    const data = await Data.findById(req.params.id);
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const updateData = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Data.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const deleteData = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Data.findByIdAndRemove({ _id: id });
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

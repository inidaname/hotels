import { incomeModel } from "../models";

export async function createIncome(req, res) {
    try {
        const income = await incomeModel.create({...req.body });

        return res
            .status(200)
            .json({ data: income, message: `Income added succesfully` });
    } catch (error) {
        return res.status(error.status || 500).json({ message: error.message });
    }
}

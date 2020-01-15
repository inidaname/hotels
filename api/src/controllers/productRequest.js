import { productRequestModel, productModel } from '../models';

export async function createProductRequest(req, res){

  const products = req.body.productRequest;
  try {
      const result = await products.forEach( async product => { 
        const { productDetail, productQuantity } = product;

        const mainProduct = await productModel.findById({_id : productDetail}).exec();
          
        const { quantity } = mainProduct;


        const subtractProduct = quantity - productQuantity;

        await productModel.findByIdAndUpdate({_id: productDetail }, { quantity: subtractProduct})

      });
        
      const requestedProduct = await productRequestModel.create({...req.body});

      if (requestedProduct) {
        return res.status(200).json({message: `Log successfully`, data: requestedProduct});
      }

  } catch (error) {
    return res.status(error.status || 500).json({message: error.message})
  }
}

export async function editProductRequest(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      throw { message: `Request to edit must be selected`, status: 400 }
    }
    let options = req.body;
    const updates = {};

    for (const option of Object.keys(options)) {
      updates[option] = options[option];
    }

    const updateProduct = await productRequestModel.findByIdAndUpdate(id, updates, { new: true }).lean();

    if (updateLog) {
      return res.status(200).json({ message: `Log updated successfully`, data: updateProduct });
    }
  } catch (error) {
    return res.status(error.status || 500).json({message: error.message});
  }
}

export async function deleteProductRequest(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      throw { message: `Log to edit must be selected`, status: 400 }
    }
    const toDelete = await productRequestModel.findByIdAndDelete(id, {new: true});

    if (toDelete) {
      return res.status(200).json({ message: `Log Deleted successfully`, data: toDelete });
    }
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}

export async function allProductRequest(req, res) {
  try {
    
   
    const allrequest = await productRequestModel.find({});

    if (allrequest) {
      return res.status(200).json({ message: `successfully`, data: allrequest });
    }
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}

export async function getProductRequestById(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      throw { message: `Log to edit must be selected`, status: 400 }
    }
    const allrequest = await productRequestModel.find({requestBy:id});

    if (allrequest) {
      return res.status(200).json({ message: `successfully`, data: allrequest });
    }
  } catch (error) {
    return res.status(error.status || 500).json({ message: error.message });
  }
}



import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../configs/firebase";

const productsCollection = "S-mart-products";
const cartProductsCollection = "S-mart-cart";

const productsCollectionData = collection(db, productsCollection);
const cartProductsCollectionData = collection(db, cartProductsCollection);

export const getProducts = createAsyncThunk(
  "ecommerce/getProducts",
  async (_, thunkApi) => {
    try {
      const response = await getDocs(productsCollectionData);
      const data = response.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const getCartItems = createAsyncThunk(
  "cart/getCart",
  async (_, thunkApi) => {
    try {
      const response = await getDocs(cartProductsCollectionData);
      const data = response.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const getCartQuantity = createAsyncThunk(
  "cart/getQty",
  async (_, thunkApi) => {
    try {
      const response = await getDocs(cartProductsCollectionData);
      const data = response.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      return data.length;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const postCartProduct = createAsyncThunk(
  "cart/post",
  async (product, thunkApi) => {
    try {
      await setDoc(doc(db, cartProductsCollection, product.id), product);
      return product;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const incrementCartProduct = createAsyncThunk(
  "cart/increment",
  async (product, thunkApi) => {
    try {
      await updateDoc(doc(db, cartProductsCollection, product.id), {
        quantity: product.quantity + 1,
      });
      return product.id;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const decrementCartProduct = createAsyncThunk(
  "cart/decrement",
  async (product, thunkApi) => {
    try {
      await updateDoc(doc(db, cartProductsCollection, product.id), {
        quantity: product.quantity - 1,
      });
      return product.id;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const deleteCartProduct = createAsyncThunk(
  "cart/delete",
  async (id, thunkApi) => {
    try {
      await deleteDoc(doc(db, cartProductsCollection, id));
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

import React, {useContext} from 'react';
import {useProducts} from "../hooks/products";
import {ModalContext} from "../context/ModalContext";
import {IProduct} from "../models";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import Product from "../components/Product";
import Modal from "../components/Modal";
import CreateProduct from "../components/CreateProduct";

const ProductsPage = () => {
    const {error, products, isLoading, addProduct} = useProducts()
    const {modal, open: openModal, close: closeModal} = useContext(ModalContext)

    const createHandler = (product: IProduct) => {
        closeModal()
        addProduct(product)
    }

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {isLoading && <Loader/>}
            {error && <ErrorMessage error={error}/>}
            {
                products.map(product => (
                    <Product key={product.id} product={product}/>
                ))
            }

            {modal && <Modal title={'Create new Product'} onClose={closeModal}>
                <CreateProduct onCreate={createHandler}/>
            </Modal>}

            {!modal && <button
                className="fixed bottom-5 right-5 rounded-full bg-blue-400 text-white text-2xl px-4 py-2"
                onClick={openModal}
            >
                Add
            </button>}
        </div>
    )
};

export default ProductsPage;
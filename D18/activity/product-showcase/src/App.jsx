import { useState } from 'react';
import ProductPage from './pages/ProductPage';
import ProductModal from './components/ProductModal';
import AppNavbar from './components/AppNavbar';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setShowModal(false);
  };

  return (
    <div>
      <AppNavbar />
      <ProductPage onViewDetails={handleViewDetails} />
      <ProductModal
        product={selectedProduct}
        show={showModal}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;

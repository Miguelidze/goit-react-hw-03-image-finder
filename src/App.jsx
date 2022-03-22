import { Component } from "react";
import "./App.css"
import { TailSpin } from 'react-loader-spinner'
import Searchbar from "./components/Searchbar/Searchbar";
import Button from "./components/Button/Button";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Modal from "./components/Modal/Modal";
import fetchImages from "./services/api";


<TailSpin
  height="100"
  width="100"
  color='grey'
  ariaLabel='loading'
/>
class App extends Component {
  state = {
    query: "",
    page: 1,
    isPending: false,
    isModalOpen: false,
    images: [],
    modalImg: "",
  }
  handleSetQuery = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmitForm = (e) => {
    e.preventDefault()
    this.setState({ isPending: true, page: 1});
  };

  handleTogleModal = (image) => {
    this.setState(prev => ({ isModalOpen: !prev.isModalOpen, modalImg: image }))
  };

  componentDidUpdate() {
    if (this.state.isPending) {
      fetchImages(this.state.query, this.state.page).then((img) => {
        this.setState((prev) => ({
          images: this.state.page > 1 ? [...prev.images, ...img] : img,
          isPending: false,
        }));
      });
    }
  }
  handleLoadMore(e) {
    this.setState((prev) => ({ page: prev.page + 1, isPending: true }));
  };
  render() {
    const { isModalOpen, images, query, modalImg } = this.state;
    const {
      handleSetQuery,
      handleSubmitForm,
      handleTogleModal,
      handleLoadMore,
    } = this;
    return (<div className="finder">
      <Searchbar
        query={query}
        handleSetQuery={handleSetQuery}
        handleSubmitForm={handleSubmitForm}
      />
      <ImageGallery handleTogleModal={handleTogleModal} images={images} />
      {images.length >= 12 && <Button handleLoadMore={handleLoadMore.bind(this)} />}
      {isModalOpen && (<Modal modalImg={modalImg} handleTogleModal={handleTogleModal} />)
      }
    </div>);
  }
}

export default App;

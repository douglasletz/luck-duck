import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { participate } from "../../redux/reducer/pools.reducer";
import "./participate.scss";

import { CUInput, CUButton } from "../common/common";

const CustomSelect = styled(Form.Select)`
  font-size: 17px;
  line-height: 17px;
  font-weight: 500;
  height: 100%;
  background: rgba(17, 18, 32, 0.1294117647);
  border-radius: 6px;
  padding-left: 10px;
  border: 1px solid transparent;
  color: #8c90b7;

  :focus {
    border: 1px solid #444972 !important;
    box-shadow: unset !important;
  }
  option {
    background: #2d3161 !important;
    color: #8c90b7;
  }
`;

const Participate = ({ id, show, handleClose }) => {
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    const payload = {
      id: id,
      amount: amount,
      type: type,
      address: localStorage.getItem("address"),
    };
    dispatch(participate(payload));

    handleClose();
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdropClassName="blur-back"
      dialogClassName="register-pools"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3>Participate</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CUInput
          label="Enter your amount "
          id="id_walletaddress"
          type="text"
          onChange={(e) => setAmount(e.target.value)}
        />
        <CustomSelect
          size="sm"
          onChange={(e) => setType(e.target.value)}
          className="custom-select"
        >
          <option>Choose your currency type</option>
          <option value="eth">
            <span>ETH</span>
          </option>
          <option value="dai">DAI</option>
          <option value="usdt">USDT</option>
          <option value="usdc">USDC</option>
        </CustomSelect>
        <div className="d-flex justify-content-between mt-2">
          <CUButton
            onClick={handleClose}
            style={{ width: "48%", justifyContent: "center", padding: "10px" }}
          >
            Cancel
          </CUButton>
          <CUButton
            onClick={handleClick}
            style={{ width: "48%", justifyContent: "center", padding: "10px" }}
          >
            Confirm
          </CUButton>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Participate;

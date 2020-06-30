import React, { useState, useEffect } from "react";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { connect, useDispatch } from "react-redux";

import * as Styled from "./styles";

import Label from "../../components/label";
import Input from "../../components/input";
import Button from "../../components/button";
import Table from "../../components/table";
import { Row, BodyItem } from "../../components/table/components";

import * as homeActions from "../../store/modules/home/actions";

function Home({ history, listContacts }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(homeActions.getContactList());
  }, [dispatch]);

  useEffect(() => {
    setName("");
    setEmail("");
    setBirthdate("");
    setPhone("");
  }, [listContacts]);

  const sendContactHandle = event => {
    event.preventDefault();

    dispatch(homeActions.postContact({ name, email, birthdate, phone }));
  };

  return (
    <>
      <Styled.ContainerForm id="cadastro">
        <Styled.TitleForm>Cadastro</Styled.TitleForm>

        <Styled.Form onSubmit={sendContactHandle}>
          <Styled.Row>
            <Label text="Nome" size="14px" color="#fff" />
            <Input
              type="text"
              color="#fff"
              size="14px"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </Styled.Row>
          <Styled.Row>
            <Label text="E-mail" size="14px" color="#fff" />
            <Input
              type="email"
              color="#fff"
              size="14px"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </Styled.Row>
          <Styled.Row>
            <Label text="Nascimento" size="14px" color="#fff" />
            <Input
              type="date"
              color="#fff"
              size="14px"
              value={birthdate}
              onChange={e => setBirthdate(e.target.value)}
              required
            />
          </Styled.Row>
          <Styled.Row>
            <Label text="Telefone" size="14px" color="#fff" />

            <Input
              type="phone"
              color="#fff"
              size="14px"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              required
            />
          </Styled.Row>

          <Styled.Row center marginTop={40}>
            <Button>Cadastrar</Button>
          </Styled.Row>
        </Styled.Form>
      </Styled.ContainerForm>

      <Styled.ContainerList id="lista">
        <Styled.TitleList>Lista de Cadastro</Styled.TitleList>

        <Table columns={["", "Nome", "E-mail", "Nascimento", "Telefone"]}>
          {listContacts.map((contact, index) => (
            <Row key={`contact_${index}`}>
              <BodyItem center>{contact.id}</BodyItem>
              <BodyItem center>{contact.name}</BodyItem>
              <BodyItem center>{contact.email}</BodyItem>
              <BodyItem center>{contact.birthdate}</BodyItem>
              <BodyItem center>{contact.phone}</BodyItem>
            </Row>
          ))}
        </Table>
      </Styled.ContainerList>
    </>
  );
}

const mapStateToProps = state => ({
  listContacts: state.home.list,
});

const mapDispatchToProps = {};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Home);

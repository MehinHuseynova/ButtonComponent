import React from 'react';

import './App.css';
import { Button } from './components/Button/Button';
import shoppingCardIcon from './assets/shoopingCard.svg';

function App() {
  const imgSrc = <img src={shoppingCardIcon} />

  return (
    <div className="App">
      <h1>Buttons</h1>

      <div className="flexContainer">
        <div> <p>{`<Button />`}</p>
          <Button noPointerEvent /></div>
        <div><p>{`&:hover, &:focus`}</p>
          <Button /></div>
      </div>

      <div className="flexContainer">
        <div> <p>{`<Button variant=”outline” />`}</p>
          <Button variant='outlined' noPointerEvent /></div>
        <div><p>{`&:hover, &:focus`}</p>
          <Button variant='outlined' /></div>
      </div>

      <div className="flexContainer">
        <div> <p>{`<Button variant=text />`}</p>
          <Button variant='outlined' noPointerEvent /></div>
        <div><p>{`&:hover, &:focus`}</p>
          <Button variant='text' /></div>
      </div>

      <div className='flexContainer'>
        <div><p>{`<Button disableShadow />`}</p>
          <Button noShadow /></div>
      </div>

      <div className="flexContainer">
        <div><p>{`<Button disabled />`}</p>
          <Button disabled /></div>
        <div><p>{`<Button variant=”text” disabled />`}</p>
          <Button disabled variant="text" /></div>
      </div>

      <div className="flexContainer">
        <div> <p>{`<Button endIcon=”local_grocery_store” />`}</p>
          <Button startIcon={imgSrc} noShadow /></div>
        <div><p>{`<Button endIcon=”local_grocery_store” />`}</p>
          <Button endIcon={imgSrc} noShadow /></div>
      </div>

      <div className="flexContainer">
        <div><p>{`<Button size=”lg” />`}</p>
          <Button size="lg" noShadow /></div>
        <div><p>{`<Button size=”md” />`}</p>
          <Button size="md" noShadow /></div>
        <div><p>{`<Button size=”sm” />`}</p>
          <Button size="sm" noShadow /></div>
      </div>

      <div className="flexContainer">
        <div><p>{`<Button color="default />`}</p>
          <Button color="default" noPointerEvent /></div>
        <div><p>{`<Button color="primary" />`}</p>
          <Button color="primary" noPointerEvent /></div>
        <div><p>{`<Button color="secondary"/>`}</p>
          <Button color="secondary" noPointerEvent /></div>
        <div><p>{`<Button color="danger />`}</p>
          <Button color="danger" noPointerEvent /></div>
      </div>

      <p>{`&:hover, &:focus`}</p>
      <div className="flexContainer">
        <Button color="default" />
        <Button color="primary" />
        <Button color="secondary" />
        <Button color="danger" />
      </div>

    </div>
  );
}

export default App;

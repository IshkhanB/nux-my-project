<template>
  <HeaderComp/>
  <slot></slot>
  <FooterCompon/>
  <Teleport to="#teleports">
    <CartClient/>
  </Teleport>
</template>
  
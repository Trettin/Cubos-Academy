![](https://i.imgur.com/xG74tOh.png)

## Exercício de classe 🏫

### Grid e suas propriedades


`.grid` = container grid
`.item` = item grid

**1.** grid-template-columns

**a)** Coloque um valor na propriedade `grid-template-columns: ` de forma a ter 3 colunas: a primeira e a última com tamanho fixo X e a do meio ocupando o espaço restante
**b)** Modifique a resposta da questão anterior para impedir o item do meio de ser menor do que Y

**2.** Alinhamento

```css=
.grid {
    display: grid;
    grid-template-columns: auto 1fr auto;
    justify-content: space-between;
}
```

**a)** Porque o `justify-content` não tem efeito no código acima?

<details>
    <summary>Clique aqui para ver a resposta</summary>         Porque as colunas já ocupam todo o espaço disponível, não sobrando nada pra alinhar.
</details>

```css=
.grid {
    display: grid;
    grid-template-columns: repeat(3, 200px);
    justify-items: center;
}

.item {
    width: 200px;
}
```

**b)** Por que o `justify-items` do código acima não tem efeito? Como centralizar os itens horizontalmente?

<details>
    <summary>Clique aqui para ver a resposta</summary>         Porque não tem espaço vazio nas colunas, já que elas tem o mesmo tamanho que os itens, de forma que não sobra espaço para alinhar. para centralizar, usa-se `justify-content: center`
</details>

```css=
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
}
```

**c)** Assumindo que `.grid` tem `1200px` de largura e 3 itens flex, quantas colunas vão ser criadas?

<details>
    <summary>Clique aqui para ver a resposta</summary>  6       
</details>

```css=
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, 200px);
}
```

**d)** Assumindo que `.grid` tem `1200px` de largura e 3 itens flex, quantas colunas vão ser criadas?

<details>
    <summary>Clique aqui para ver a resposta</summary>  3       
</details>


**3.** min-content, max-content

**a)** Uma dessas divs tem `width: min-content`, outra `max-content` e outra, `auto`. Você sabe dizer qual é qual? Por que?

![](https://i.imgur.com/1y0ImO1.png)

<details>
    <summary>Clique aqui para ver a resposta</summary>  Ordem: max, min, auto      
</details>

**4.** grid-row / grid-column

**a)** Como fazer um item ocupar duas rows, independente de qual seja?
<details>
    <summary>Clique aqui para ver a resposta</summary>  <code>grid-row-end: span 2</code>
</details>

**b)** Como fazer um item ocupar sempre a última coluna, independente de quantas colunas existam?
<details>
    <summary>Clique aqui para ver a resposta</summary>  <code>grid-column-start: -1</code>
</details>

**5.** Como descrever essa grid usando `grid-template-areas`?

![](https://i.imgur.com/KV8zLgL.png)

<details>
    <summary>Clique aqui para ver a resposta</summary>  <code>grid-template-areas: "photo title" "photo text" "footer footer"</code>
</details>

**6.** grid-auto-*

**a)** Como fazer que items grid sejam fiquem um ao lado do outro sem usar `grid-template-columns`?

<details>
    <summary>Clique aqui para ver a resposta</summary>  <code>grid-auto-flow: column</code>
</details>

**b)** Como alterar a altura de rows criadas automaticamente para 200px?

<details>
    <summary>Clique aqui para ver a resposta</summary>  <code>grid-auto-rows: 200px</code>
</details>

###### tags: `front-end` `módulo 1` `exercício de classe` `HTML` `CSS`
<template>
  <section>
    <h1>Noten</h1>
    <table>
      <tr>
        <th>Punkte</th>
        <th>Notewort</th>
        <th>Note</th>
        <th>Rohpunkte</th>
        <th>Notendefinition</th>
        <th>Bemerkung</th>
      </tr>
      <tr class="green1">
        <td>15</td>
        <td rowspan="3">sehr gut</td>
        <td>1+</td>
        <td>95 %</td>
        <td rowspan="3">
          <i
            >Die Leistungen entsprechen den Anforderungen in besonderem Maße.</i
          >
        </td>
        <td rowspan="3"></td>
      </tr>
      <tr class="green1">
        <td>14</td>
        <td>1</td>
        <td>90 %</td>
      </tr>
      <tr class="green1">
        <td>13</td>
        <td>1−</td>
        <td>85 %</td>
      </tr>
      <tr class="green2">
        <td>12</td>
        <td rowspan="3">gut</td>
        <td>2+</td>
        <td>80 %</td>
        <td rowspan="3">
          <i>Die Leistungen entsprechen den Anforderungen voll.</i>
        </td>
        <td rowspan="3"></td>
      </tr>
      <tr class="green2">
        <td>11</td>
        <td>2</td>
        <td>75 %</td>
      </tr>
      <tr class="green2">
        <td>10</td>
        <td>2−</td>
        <td>70 %</td>
      </tr>
      <tr class="yellow1">
        <td>9</td>
        <td rowspan="3">befriedigend</td>
        <td>3+</td>
        <td>65 %</td>
        <td rowspan="3">
          <i>Die Leistungen entsprechen den Anforderungen im Allgemeinen.</i>
        </td>
        <td rowspan="3"></td>
      </tr>
      <tr class="yellow1">
        <td>8</td>
        <td>3</td>
        <td>60 %</td>
      </tr>
      <tr class="yellow1">
        <td>7</td>
        <td>3−</td>
        <td>55 %</td>
      </tr>
      <tr class="yellow2">
        <td>6</td>
        <td rowspan="2">ausreichend</td>
        <td>4+</td>
        <td>50 %</td>
        <td rowspan="2">
          <i
            >Die Leistungen weisen zwar Mängel auf, entsprechen aber im Ganzen
            noch den Anforderungen.</i
          >
        </td>
        <td rowspan="2"></td>
      </tr>
      <tr class="yellow2">
        <td>5</td>
        <td>4</td>
        <td>45 %</td>
      </tr>
      <tr class="orange">
        <td>4</td>
        <td><i>schwach</i> ausreichend</td>
        <td>4−</td>
        <td>39 %</td>
        <td>
          <i
            >Die Leistungen weisen Mängel auf und entsprechen den Anforderungen
            nur noch mit Einschränkungen.</i
          >
        </td>
        <td rowspan="4"><i>defizitärer Bereich</i></td>
      </tr>
      <tr class="orange">
        <td>3</td>
        <td rowspan="3">mangelhaft</td>
        <td>5+</td>
        <td>33 %</td>
        <td rowspan="3">
          <i
            >Die Leistungen entsprechen den Anforderungen nicht, lassen jedoch
            erkennen, dass die notwendigen Grundkenntnisse vorhanden sind und
            die Mängel in absehbarer Zeit behoben werden können.</i
          >
        </td>
      </tr>
      <tr class="orange">
        <td>2</td>
        <td>5</td>
        <td>27 %</td>
      </tr>
      <tr class="orange">
        <td>1</td>
        <td>5−</td>
        <td>20 %</td>
      </tr>
      <tr class="red">
        <td>0</td>
        <td>ungenügend</td>
        <td>6</td>
        <td>0 %</td>
        <td>
          <i
            >Die Leistungen entsprechen den Anforderungen nicht und selbst die
            Grundkenntnisse sind so lückenhaft, dass die Mängel in absehbarer
            Zeit nicht behoben werden können.</i
          >
        </td>
        <td><i>nicht belegt</i></td>
      </tr>
    </table>

    <p>
      Quelle:
      <a
        href="https://de.wikipedia.org/wiki/Vorlage:Punktesystem_der_gymnasialen_Oberstufe"
        rel="norefer"
        target="_blank"
        >de.wikipedia.org/wiki/Vorlage:Punktesystem_der_gymnasialen_Oberstufe</a
      >
    </p>
  </section>
</template>

<style scoped lang="scss">
td {
  padding: 0 0.5rem;
  text-align: center;
}

.green1,
.green2,
.yellow1,
.yellow2,
.orange,
.red {
  color: #000;
}

.green1 {
  background-color: rgba(187 238 187 / 75%);
}

.green2 {
  background-color: rgba(204 255 204 / 75%);
}

.yellow1 {
  background-color: rgba(255 255 187 / 75%);
}

.yellow2 {
  background-color: rgba(255 238 170 / 75%);
}

.orange {
  background-color: rgba(255 221 170 / 75%);
}

.red {
  background-color: rgba(255 170 170 / 75%);
}
</style>

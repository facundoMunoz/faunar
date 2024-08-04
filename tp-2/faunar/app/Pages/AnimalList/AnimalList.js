import { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../../Components/GlobalStyles/GlobalStyles';

export default AnimalList = () => {

  const [animals] = useState([
    {
      key: 1,
      name: "Yaguareté",
      scientificName: "Panthera onca",
      description: "Máximo predador y felino de América. Carnívoro félido, misterioso y solitario, se esconde entre los árboles y los matorrales. Su pelaje, con manchas negras sobre un fondo amarillo o marrón, le ayuda a camuflarse en su entorno. Es un depredador implacable, un cazador experto que puede saltar hasta 6 metros de altura y 12 metros de distancia. Su fuerza y su velocidad le permiten derribar a presas mucho más grandes que él. Es un animal importante para el ecosistema, ya que ayuda a controlar las poblaciones de sus presas. Su extinción sería una pérdida irreparable para la biodiversidad.",
      weightHeight: "Mide entre 150 y 170 cm de largo, más 80 cm aproximadamente que mide la cola, con una altura de entre 65 a 80 cm hasta la cruz y un peso de entre 70 y 90 kg, aunque puede llegar a pesar hasta 135 kg.",
      zones: "Yungas de Salta y Jujuy, la selva misionera y algunos sectores de la región chaqueña, además de zones protegidas como Parques Nacionales Iguazú (Misiones), Copo (Santiago del Estero), Calilegua (Jujuy), Baritú y la Reserva Nacional El Nogalar de los Toldos (Salta)",
      diet: "Se alimenta de casi todas las especies que conviven en su hábitat. Entre sus presas se incluyen a los tapires, carpinchos, pecaríes, corzuelas, armadillos, pacas, acutíes, monos, yacarés, serpientes, tortugas, aves y hasta ocasionalmente come algún fruto",
      extinction: true
    },
    {
      key: 2,
      name: "Yacaré",
      scientificName: "Caiman Yacare",
      description: "Depredador silencioso que acecha en las aguas oscuras de los ríos, esteros y lagunas. Su piel oscura lo camufla a la perfección, y su cola poderosa le permite lanzarse sobre sus presas con la velocidad del rayo. Puede permanecer inmóvil durante horas, esperando a que su presa se acerque.",
      weightHeight: "El yacaré en su estado adulto puede superar los 2,5 metros de largo y pesar más de 50 kilos.",
      zones: "Se pueden encontrar yacarés en ríos, arroyos, esteros, lagunas y zones pantanosas. En especial en aguas calmas y con vegetación acuática en las provincias: Misiones, Corrientes, Formosa y parte de Santa Fe, Entre Ríos, Chaco y Salta.",
      diet: "Carnívoro. El mayor predador de los ríos, esteros y lagunas. Se alimenta de peces, aves acuáticas y pequeños mamíferos como coipos, nutrias y crías de carpinchos.",
      extinction: true
    },
    {
      key: 3,
      name: "Carpincho",
      scientificName: "Hydrocherus hydrochaeris",
      description: "Es un roedor herbívoro anfibio, que por su tamaño resulta el mayor de los roedores vivientes. Es de hábitos apacibles y gregarios. Conforma grupos sociales de entre tres y diez (o más) individuos. Posee un comportamiento reproductivo del tipo de harén (un macho puede tener varias hembras). ",
      weightHeight: "Un ejemplar adulto de carpincho pesa alrededor de 55 Kg y mide más de 1 metro de largo y entre 50 y 62 cm de altura.",
      zones: "Habita en zones costeras de río, arroyos, lagunas y bañados preferentemente zona de pastizales y arbustos donde encuentran refugio. Vive en la provincia mesopotámica de Misiones, Corrientes y Entre Ríos. También se los encuentra en zones de esteros, bañados y a orilla de cursos de agua de la provincia de Formosa, Salta, Chaco y Santa Fe y Buenos Aires.",
      diet: "Herbívoro. Come hierbas palustres, gramíneas y hiervas ribereñas. Se alimenta principalmente durante el atardecer y la noche.",
      extinction: false
    },
    {
      key: 4,
      name: "Hornero",
      scientificName: "Furnarius rufus",
      description: "Símbolo nacional Argentino. Pequeña ave de color marrón rojizo con un pico largo y curvado. Se encuentra en todo el país. Muy social y se reproduce en colonias. El macho construye elaborados nidos de barro, que a menudo se encuentran en árboles o postes. Las hembras ponen de 2 a 5 huevos, que incuban durante 14 a 16 días. ",
      weightHeight: "Pesa entre 31-65 g y un tamaño de 16-23 cm de longitud",
      zones: "Bosques, pastizales, matorrales y áreas urbanas",
      diet: "Insectos, frutas y semillas",
      extinction: true
    },
    {
      key: 5,
      name: "Guanaco",
      scientificName: "Lama guanicoe",
      description: "Son como los caballos de la Patagonia. Conocido por escupir saliva o bolas de comida que están mordiendo a gran distancia.Su pelaje largo y marrón, sus patas delgadas y su cola peluda, son un espectáculo digno de ver. Es muy social y vive en manadas de hasta 50 individuos. Muy activo y pasa la mayor parte del día pastando. Muy buen corredor y puede alcanzar velocidades de hasta 50 km/h. Es una especie importante en el ecosistema de la Patagonia. Ayuda a controlar la vegetación y son un alimento importante para los depredadores, como el puma y el zorro.",
      weightHeight: "Peso de 90 a 150kg. 1,20 a 1,40 metros de altura",
      zones: "Su abundancia es mayor en las zones protegidas como las Reservas La Payunia en la provincia de Mendoza y Auca Mahuida en la provincia de Neuquen. En menor medida en Chubut",
      diet: "Herbívoro, come todo tipo de hierbas, tubérculos, musgos, semillas y frutas tiernas.",
      extinction: true
    },
    {
      key: 6,
      name: "Ñandú",
      scientificName: "Rhea",
      description: "Ave no voladora, más grande de América del Sur. Su nombre significa araña en guaraní, porque cuando abre las alas, parece una araña en su tela. Recorren las pampas argentinas a gran velocidad. Tiene plumas marrones grisáceas, patas largas y pico largo, curvo. Es muy social y vive en grupos de hasta 100 individuos. Activo, pasan la mayor parte del día pastando. Muy buen corredor y puede alcanzar velocidades de hasta 40 km/h.",
      weightHeight: "Peso de 30 a 50kg. 1,30 a 1,80 metros de altura.",
      zones: "Se distribuye desde el noroeste hasta el centro del país",
      diet: "Omnívoro, su diet incluye semillas, hierbas, insectos, reptiles y pequeños mamiferos.",
      extinction: true
    }
  ]);

  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <FlatList
        style={{ flex: 1, width: "100%", paddingTop: 50 }}
        data={animals}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Animal", { item })}
            style={{
              backgroundColor: "orange",
              margin: 10,
              padding: 10
            }}
          >
            <Text style={{ fontSize: 15 }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  
function getRandomColor()
{
  let color = "#";
  for (let i = 0; i < 3; i++) {
    let num = Math.floor(Math.random() * 192) + 32; // 32 - 224. Treu saturació de color
    if(num < 0x10) // si només té un dígit
      color+= '0';
    color+= num.toString(16);
  }
  return color;
}

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <View style={styles.horizontal}>
          <DrumPad color={getRandomColor()} num="0"/>
          <DrumPad color={getRandomColor()} num="1"/>
          <DrumPad color={getRandomColor()} num="2"/>
      </View> 
      <View style={styles.horizontal}>
          <DrumPad color={getRandomColor()} num="3"/>
          <DrumPad color={getRandomColor()} num="4"/>
          <DrumPad color={getRandomColor()} num="5"/>
      </View>
      <View style={styles.horizontal}>
          <DrumPad color={getRandomColor()} num="6"/>
          <DrumPad color={getRandomColor()} num="7"/>
          <DrumPad color={getRandomColor()} num="8"/>
      </View>
    </View>
  );
}

const DrumPad = (props) =>
{
    const sounds = 
    [
      require(`./assets/sounds/0.mp3`),
      require(`./assets/sounds/1.mp3`),
      require(`./assets/sounds/2.mp3`),
      require(`./assets/sounds/3.mp3`),
      require(`./assets/sounds/4.mp3`),
      require(`./assets/sounds/5.mp3`),
      require(`./assets/sounds/6.mp3`),
      require(`./assets/sounds/7.mp3`),
      require(`./assets/sounds/8.mp3`),
    ];

    async function playSound()
    {
        const { sound } = await Audio.Sound.createAsync(sounds[props.num]);
        //setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    return(
      <View>
        <TouchableOpacity style={[styles.square , {backgroundColor : props.color}]} onPress={playSound}>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
  },
  square: {
    width: 100,
    height:100,
    margin: 10,
    borderRadius: '1em',
  },
});

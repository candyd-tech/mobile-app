import React from "react";
import { View, Text, SafeAreaView, FlatList, StyleProp, ViewStyle } from "react-native";
import styles from "../ProfileStyles"

type ItemData = {
  id: string;
  title: string;
};

const DATA: ItemData[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da2-472f-bd96-145571e29d72',
    title: 'Fourth Item',
  },
  {
    id: '58694a0f-3da4-474f-bd96-145571e29d72',
    title: 'Fifth Item',
  },
  {
    id: '58694a0-3da1-477f-bd96-145571e29d72',
    title: 'Sixth Item',
  },
];

const SectionListIntoThree = (data: ItemData[]): ItemData[][] => {
  const d: ItemData[][] = [];
  data.forEach(( data, index ) => {
    if (index % 3 === 0) {
      d.push([data]);
    } else {
      d[d.length - 1].push(data);
    }
  })

  return d;
}

const CardContainer = ({itemList, index}: {itemList: ItemData[], index: number}) => {
  return (
    <View style={[ styles.cardContainer, {flexDirection: index % 2 === 0 ? "row" : "row-reverse"} ]}>
      <Card item={itemList[0]} index={index} style={{height: 300}} />

      <View style={{flex: 1, display: "flex", flexDirection: "column"}}>
        <Card item={itemList[1]} index={index} />
        <Card item={itemList[2]} index={index} />
      </View>
    </View>
  )

}

const Card = ({item, index, style}: {item: ItemData, index: number, style?: StyleProp<ViewStyle>}) => {
  return (
    <View style={[styles.card, style]}>
      <Text>{item.title}</Text>
      <Text>{index}</Text>
    </View>
  )
}

const ProfileFeed = () => {
  return (
    <View style={styles.profileFeed}>
      <SafeAreaView>
        <FlatList
          data={SectionListIntoThree(DATA)}
          renderItem={({item, index}) => {
            return (
              <CardContainer itemList={item} index={index}/>
            )
          }}
          keyExtractor={( item, index ) => item[index].id}
        />
      </SafeAreaView>
    </View>
  )
}

export default ProfileFeed;
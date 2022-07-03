import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import moment from "moment";
import {
  Divider,
  FlatList,
  Image,
  NativeBaseProvider,
  ScrollView,
  Spinner,
} from "native-base";

import { Services } from "../Services/Services";
const All = () => {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    Services("general")
      .then((data) => {
        setNewsData(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  return (
    <NativeBaseProvider>
      <View>
        <View style={styles.cont}>
          <Text style={styles.text}>US Latest News</Text>
        </View>
        <ScrollView height={1000}>
          {newsData.length > 1 ? (
            <FlatList
              data={newsData}
              renderItem={({ item }) => (
                <View>
                  <View style={styles.newsCont}>
                    <Image
                      width={550}
                      height={250}
                      resizeMode={"cover"}
                      source={{
                        uri: item.urlToImage,
                      }}
                      alt="Alternate Text"
                    />
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.date}>
                      {moment(item.publishedAt).format("LLL")}
                    </Text>
                    <Text style={styles.newsDiscription}>
                      {item.description}
                    </Text>
                  </View>
                  <Divider my={2} bg="blueGray.400" />
                </View>
              )}
              key={(item) => item.id}
            />
          ) : (
            <View style={styles.spinner}>
              <Spinner color="danger.400" />
            </View>
          )}
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
};

export default All;

const styles = StyleSheet.create({
  cont: {
    textAlign: "center",
    padding: 10,
    backgroundColor: "#e0e0e0",
    border: "1px solid #bdbdbd",
    marginTop: 30,
  },
  text: {
    fontSize: 25,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    marginTop: 10,
  },
  date: {
    fontSize: 22,
  },
  description: {
    padding: 20,
  },
  newsCont: {
    padding: 20,
  },
  newsDiscription: {
    fontSize: 16,
    marginTop: 10,
  },
  date: {
    paddingTop: 5,
    fontSize: 15,
  },
  spinner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 500,
  },
});

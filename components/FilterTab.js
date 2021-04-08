import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
const FilterTab = (props) =>{

    return(
        <View style={styles.filterTabContainer}>
            <TouchableOpacity
                style={styles.tabButton}
                // onPress={onPress}
            >
                <Text>ทั้งหมด</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.tabButton}
                // onPress={onPress}
            >
                <Text>กำลังทำ</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.tabButton}
                // onPress={onPress}
            >
                <Text>สำเร็จแล้ว</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    tabButton:{
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        flex:1,
        borderWidth:.2,
        borderColor:'#a8a8a8'
    },
    filterTabContainer:{
        flexDirection:'row'
    }
})
export default FilterTab
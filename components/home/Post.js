import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-elements';

const postFooterIcons = [
    {
        name: 'Like',
        imageUrl:
            'https://img.icons8.com/fluency-systems-regular/60/ffffff/like.png',
        likedImageUrl: 'https://img.icons8.com/ios-glyphs/60/fa314a/like.png',
    },
    {
        name: 'Comment',
        imageUrl:
            'https://img.icons8.com/fluency-systems-regular/60/ffffff/speech-bubble.png',
    },
    {
        name: 'Share',
        imageUrl:
            'https://img.icons8.com/fluency-systems-regular/60/ffffff/share.png',
    },
    {
        name: 'Save',
        imageUrl:
            'https://img.icons8.com/fluency-systems-regular/60/ffffff/save.png',
    },
];

const Post = ({ post }) => {
    return (
        <View style={{ marginBottom: 30 }} >
            <Divider width={1} orientation='vertical' />
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{ marginHorizontal: 15, marginTop: 10 }} >
                <PostFooter />
            </View>
        </View>
    )
}

const PostHeader = ({ post }) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
            <Image source={{ uri: post.profile_picture }} style={styles.post} />
            <Text style={{ color: 'white', marginLeft: 5, fontWeight: '700' }}>
                {post.user}
            </Text>
        </View>

        <Text style={{ color: 'white', fontWeight: '890' }}>...</Text>
    </View>
)

const PostImage = ({ post }) => (
    <View style={{
        width: '100%',
        height: 450,
    }}>
        <Image
            source={{ uri: post.imageUrl }}
            style={{ height: '100%', resizeMode: 'cover' }}
        />
    </View>
)

const PostFooter = () => (
    <View style={{ flexDirection: 'row' }}>
        <View style={styles.leftFooterIconsContainer}>
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl} />
        </View>
    </View>
)

const Icon = ({ imgStyle, imgUrl }) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={{ uri: imgUrl }} />
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    post: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: '#ff8501',
    },
    footerIcon: {
        width: 33,
        height: 33,
    },
    shareIcon:{
        transform: [{ rotate: '320deg' }],
        marginTop: -3,
    },
    leftFooterIconsContainer: {
        flexDirection: 'row',
        width: '32%',
        justifyContent: 'space-between',
    },
})

export default Post;

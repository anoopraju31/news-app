import React from 'react'
import { View } from 'react-native'
import { Card, Text } from 'react-native-paper'

const App = () => {
	return (
		<View style={{ paddingHorizontal: 20, justifyContent: 'center', flex: 1 }}>
			<Card>
				<Card.Title title='Card Title' subtitle='Card Subtitle' />
				<Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
				<Card.Content>
					{/* <Text variant='titleLarge'>Card title</Text> */}
					<Text variant='bodyMedium'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
						quas.
					</Text>
				</Card.Content>
			</Card>
		</View>
	)
}

export default App

// const friends = call to backend
const friends = {
	'Billy Bob': {
		profile_pic: '123',
		firstName: 'Billy',
		lastName: 'bob',
	},
	'Maria Martin': {
		profile_pic: '123',
		firstName: 'Maria',
		lastName: 'Martin',

	},
	'John Johnsonson': {
		profile_pic: '123',
		firstName: 'John',
		lastName: 'Johnsonson',
	}
};


export default function friendsList() {
	const displayFriendsList = friends.map(friend =>
		<li>
			<img
				src={friend.profile_pic}
				alt={friend.firstName + ' ' + friend.lastName}
			/>
			<p>
				{friend.firstName + ' ' + friend.lastName}
			</p>
		</li>);
	return <ul>{displayFriendsList}</ul>
}

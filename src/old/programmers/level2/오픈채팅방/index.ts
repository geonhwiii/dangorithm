const ENTER = 'Enter';
const LEAVE = 'Leave';
const CHANGE = 'Change';

const ENTER_MESSAGE = '님이 들어왔습니다.';
const LEAVE_MESSAGE = '님이 나갔습니다.';

export function solution(record: string[]) {
	const records = record.map((item) => item.split(' '));
	const messageList: { id: string; type: string }[] = [];
	const userMap = new Map();
	// 1. 모든 유저를 userMap에 저장
	records.forEach(([type, id, name]) => {
		if (type === CHANGE || type === ENTER) {
			userMap.set(id, name);
		}
	});
	// 2. records를 순회하면서 type별로 messageList에 추가
	records.forEach(([type, id, name]) => {
		switch (type) {
			case ENTER:
				messageList.push({ id, type });
				userMap.set(id, name);
				break;
			case LEAVE:
				messageList.push({ id, type });
				break;
			case CHANGE:
				userMap.set(id, name);
				break;
		}
	});
	const result = messageList.map(({ id, type }) => {
		const name = userMap.get(id);
		if (type === ENTER) {
			return `${name}${ENTER_MESSAGE}`;
		}
		return `${name}${LEAVE_MESSAGE}`;
	});
	return result;
}

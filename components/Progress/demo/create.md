---
order: 1
title:
  zh-CN: 基本
  en-US: Basic usage
---

```jsx
import { Progress } from 'mhc-antd-admin';

class App extends React.Component {

	render() {
		return (
			<div>
				<Progress type="circle"/>
				<Progress type="circle" percent={80}/>
				<Progress type="circle" percent={100}/>
			</div>
		);
	}
}

ReactDOM.render(
	<App />
	, mountNode
);
```

<!-- <style>
.zent-progress {
	margin-bottom: 10px;
}
.zent-progress-circle {
	margin-right: 10px;
}
</style> -->

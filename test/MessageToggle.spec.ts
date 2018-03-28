import { mount, createLocalVue } from '@vue/test-utils';
import MessageToggle from 'components/MessageToggle.vue';
import Message from 'components/Message.vue';
import { expect } from 'chai';

describe('MessageToggle.vue', () => {
	it('toggles msg passed to Message when button is clicked', () => {
		const localVue = createLocalVue();

		const wrapper = mount(MessageToggle, {
			localVue
		});

		const button = wrapper.find('#toggle-message');
		button.trigger('click');

		const MessageComponent = wrapper.find(Message);
		let props = MessageComponent.props() as any;
		expect(props.msg).to.not.null;
		expect(props.msg).to.eq('message');

		button.trigger('click');
		props = MessageComponent.props() as any;
		expect(props.msg).to.not.null;
		expect(props.msg).to.eq('toggled message');
	});
});

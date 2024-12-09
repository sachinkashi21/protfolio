import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = ({ date, title, icon, description }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={date}
      iconStyle={{
        background: 'rgb(33, 150, 243)',
        color: '#fff',
      }}
      icon={icon}
      contentStyle={{
        background: 'var(--tw-bg-opacity, 1) rgb(255, 255, 255)',
        color: 'var(--tw-text-opacity, 1) rgb(31, 41, 55)',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
      }}
      contentArrowStyle={{
        borderRight: '7px solid rgb(255, 255, 255)',
      }}
    >
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </VerticalTimelineElement>
  );
};

export default Timeline;

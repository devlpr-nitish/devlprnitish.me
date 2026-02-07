import React, { useEffect, useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

interface CalendarData {
    date: string;
    count: number;
}

const LeetCodeHeatmap: React.FC = () => {
    const [data, setData] = useState<CalendarData[]>([]);

    useEffect(() => {
        fetch("https://leetcode-stats-api.herokuapp.com/devlprnitish")
            .then(res => res.json())
            .then(res => {
                const calendar = res.submissionCalendar;
                const formatted = Object.keys(calendar).map(ts => ({
                    date: new Date(parseInt(ts) * 1000).toISOString().slice(0, 10),
                    count: calendar[ts],
                }));
                setData(formatted);
            });
    }, []);

    return (
        <div className="w-full">
            <CalendarHeatmap
                startDate={new Date(new Date().setFullYear(new Date().getFullYear() - 1))}
                endDate={new Date()}
                values={data}
                // @ts-ignore
                classForValue={(value: CalendarData | undefined) => {
                    if (!value) return "color-empty";
                    if (value.count === 0) return "color-empty";
                    if (value.count < 2) return "color-scale-1";
                    if (value.count < 4) return "color-scale-2";
                    if (value.count < 6) return "color-scale-3";
                    return "color-scale-4";
                }}
                showWeekdayLabels
                transformDayElement={(element, value, index) => (
                    // @ts-ignore
                    React.cloneElement(element as React.ReactElement, { title: value ? `${value.date}: ${value.count} submissions` : 'No submissions' })
                )}
            />
        </div>
    );
};

export default LeetCodeHeatmap;

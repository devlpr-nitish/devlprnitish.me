"use client";

import React, { useEffect, useState } from "react";
import { ActivityCalendar, Activity } from "react-activity-calendar";
import { motion } from "framer-motion";

const LeetCodeHeatmap: React.FC = () => {
    const [data, setData] = useState<Activity[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://alfa-leetcode-api.onrender.com/devlprnitish/calendar");
                const result = await response.json();

                const calendar = JSON.parse(result.submissionCalendar);

                // Construct a full year of data
                const today = new Date();
                const startDate = new Date();
                startDate.setFullYear(startDate.getFullYear() - 1);

                const activitiesMap = new Map<string, Activity>();

                for (let d = new Date(startDate); d <= today; d.setDate(d.getDate() + 1)) {
                    // Use local date string to avoid timezone shifts
                    const year = d.getFullYear();
                    const month = String(d.getMonth() + 1).padStart(2, '0');
                    const day = String(d.getDate()).padStart(2, '0');
                    const dateString = `${year}-${month}-${day}`;

                    activitiesMap.set(dateString, { date: dateString, count: 0, level: 0 });
                }

                // Map timestamps to dates
                Object.keys(calendar).forEach(timestamp => {
                    // The timestamp is midnight in some timezone, let's just get the date string corresponding to it
                    const date = new Date(parseInt(timestamp) * 1000);
                    // Use UTC to avoid local timezone shifting the date from the timestamp
                    const year = date.getUTCFullYear();
                    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
                    const day = String(date.getUTCDate()).padStart(2, '0');
                    const dateString = `${year}-${month}-${day}`;

                    const count = calendar[timestamp];

                    if (activitiesMap.has(dateString)) {
                        const activity = activitiesMap.get(dateString)!;
                        activity.count += count;
                        if (activity.count > 0) activity.level = 1;
                        if (activity.count >= 3) activity.level = 2;
                        if (activity.count >= 5) activity.level = 3;
                        if (activity.count >= 10) activity.level = 4;
                    }
                });

                setData(Array.from(activitiesMap.values()));
            } catch (error) {
                console.error("Failed to fetch LeetCode data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div className="animate-pulse flex h-[150px] w-full bg-gray-800/50 rounded-xl"></div>;
    }

    if (data.length === 0) {
        return <div className="text-gray-400">No LeetCode data available.</div>;
    }

    return (
        <motion.div
            className="w-full overflow-x-auto pb-4 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
        >
            <ActivityCalendar
                data={data}
                labels={{
                    totalCount: `{{count}} submissions in the last year`,
                }}
                colorScheme="dark"
                theme={{
                    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                }}
            />
        </motion.div>
    );
};

export default LeetCodeHeatmap;

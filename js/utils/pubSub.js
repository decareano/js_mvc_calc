var app = app || {};

app.pubSub = (function () {

    var events = {};

    var uid = -1;

    return {

        publish: function (event, args) {

            if (!events[event]) {
                return false;
            }

            var subscribers = events[event],
                len = subscribers ? subscribers.length : 0;

            while (len--) {
                subscribers[len].func(event, args);
            }
        },

        subscribe: function (event, func) {

            if (!events[event]) {
                events[event] = [];
            }

            var sid = ( ++uid ).toString();
            events[event].push({
                sid: sid,
                func: func
            });
            return sid;
        },

        unsubscribe: function (sid) {
            for (var m in events) {
                if (events[m]) {
                    for (var i = 0, j = events[m].length; i < j; i++) {
                        if (events[m][i].sid === sid) {
                            events[m].splice(i, 1);
                            return events;
                        }
                    }
                }
            }
        }

    }

}());

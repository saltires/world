let ejs = require('ejs'),
    people = ['geddy', 'neil', 'alex'],
    html = ejs.render('<%= people.join(", "); %>', { people: people });

const demo = `<% if (user) { %>
    <h2><%= user.name %></h2>
<% } %>`

console.log(ejs.render(demo, { user: { name: 'saltire' } }))

const TypesEnum = {
    bigint: DataTypes.BIGINT,
    int: DataTypes.INTEGER,
    varchar: DataTypes.STRING,
    date: DataTypes.DATE,
    text: DataTypes.TEXT,
}

const object = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, //设置自动增长
        comment: '自增id', //添加描述
    },
    author_id: {
        type: DataTypes.BIGINT,
    },
    pub_id: {
        type: DataTypes.BIGINT,
    },
    nick_name: {
        type: DataTypes.STRING,
    },
    img1: {
        type: DataTypes.STRING,
    },
    img2: {
        type: DataTypes.STRING,
    },
    content: {
        type: DataTypes.TEXT,
    },
    reply: {
        type: DataTypes.TEXT,
    },
    status: {
        type: DataTypes.INTEGER,
    },
    message_status: {
        type: DataTypes.INTEGER,
    },
    create_time: {
        type: DataTypes.BIGINT,
    },
    modify_time: {
        type: DataTypes.BIGINT,
    }
}
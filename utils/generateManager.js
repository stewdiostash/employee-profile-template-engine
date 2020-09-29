function generateManager(data) {
    return `<div class="card">
    <div class="card-head">
        <h3>${data.name}</h3>
    </div>
    <div class="card-body">
        <div class="card-subhead">
            <div class="rank-badge">
                <i class="fas fa-mug-hot"></i>
            </div>
            <p class="title">
                ${data.role}
            </p>
        </div>
        <div class="card-details">
            <h5>
                ID #
            </h5>
            <p>
                ${data.id}
            </p>
            <hr>
            <h5>
                Email
            </h5>
            <p>
                ${data.email}
            </p>
            <hr>
            <h5>
                Office #
            </h5>
            <p>
                ${data.officeNumber}
            </p>
        </div>
    </div>
</div>`
}

module.exports = generateManager;
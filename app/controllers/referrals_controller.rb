class ReferralsController < ApplicationController

    def index
        unless user_signed_in?
            redirect_to new_user_session_path
        end
    end

    def new

    end
    
end
